import {
    ref,
    push,
    set,
    get,
    update,
    remove,
    child,
    query,
    orderByChild,
    startAt,
    endAt,
    equalTo,
} from "firebase/database";
import { db } from "../../../firebase";
import { IArticle } from "../types/article";

const articlesRef = ref(db, "articles");

export const createArticle = async (article: Omit<IArticle, "id">) => {
    const newArticleRef = push(articlesRef);
    await set(newArticleRef, {
        ...article,
        createdAt: new Date().toISOString(),
    });
    return newArticleRef.key; // Return the generated key
};

export const getArticles = async (search: string = ""): Promise<IArticle[]> => {
    let articlesQuery;

    if (search.trim()) {
        // Search query using `startAt` and `endAt` for partial match
        articlesQuery = query(
            articlesRef,
            orderByChild("title"),
            startAt(search),
            endAt(search + "\uf8ff") // \uf8ff ensures it matches strings starting with `search`
        );
    } else {
        // No search query; fetch all articles
        articlesQuery = query(articlesRef, orderByChild("createdAt"));
    }

    const snapshot = await get(articlesQuery);
    const data = snapshot.val();
    return data
        ? Object.entries(data).map(([id, value]) => {
            const { id: any, ...rest } = value as IArticle; // Ignore `id` from `value`
            return {
                id, // Explicitly set `id` from Object.entries
                ...rest,
            };
        })
        : [];
};

export const getArticleById = async (id: string): Promise<IArticle | null> => {
    const articleRef = ref(db, `articles/${id}`);  // Path to a specific article by its ID
    const snapshot = await get(articleRef);

    if (snapshot.exists()) {
        return snapshot.val() as IArticle; // Return the article data
    } else {
        console.log("No article found with this ID.");
        return null; // If the article does not exist, return null
    }
};

export const getArticleBySlug = async (slug: string): Promise<IArticle | null> => {
    if (!slug) {
        console.error("Slug is undefined or empty");
        return null; // Return early if slug is not defined
    }

    const articlesRef = ref(db, "articles");
    const articlesQuery = query(articlesRef, orderByChild("slug"), equalTo(slug));

    try {
        const snapshot = await get(articlesQuery);

        if (snapshot.exists()) {
            const articleData = snapshot.val();
            const articleId = Object.keys(articleData)[0]; // Get the first key (article ID)
            return { ...(articleData[articleId] as IArticle) };
        } else {
            console.log("No article found with this slug.");
            return null;
        }
    } catch (error) {
        console.error("Error fetching article by slug:", error);
        return null;
    }
};

export const updateArticle = async (id: string, updatedFields: Partial<IArticle>) => {
    const articleRef = child(articlesRef, id);
    await update(articleRef, updatedFields);
};

export const deleteArticle = async (id: string) => {
    const articleRef = child(articlesRef, id);
    await remove(articleRef);
};

