import { get } from "../untils/request";

export const getListCategory = async () => {
    const result = await get("products"); 
    return result;
}