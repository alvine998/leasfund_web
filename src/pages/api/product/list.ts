import { CONFIG } from "@/config";
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        // const session = req.session?.user;
        // const { payload } = req.body;
        // Replace with the external API URL
        const response = await axios.get(CONFIG.base_url_api + "/product/list", {
            headers: CONFIG.headers
        });

        // Send the fetched data back to the client
        res.status(200).json(response?.data);
    } catch (error: any) {
        console.error("Error fetching data:", error.message);
        res.status(400).json(error);
    }
}
