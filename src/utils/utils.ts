export const toMoney = (value: number) => {
    // const newformat = new Intl.NumberFormat('id-ID', {
    //     style: 'currency',
    //     currency: 'IDR',
    //     minimumFractionDigits: 0
    // }).format(value);
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}