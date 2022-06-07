import Cookies from "js-cookie";

// Endereço padrão das API

const prod = "http://dashboardbff.oonpayperuse.com.br";
const dev = "http://localhost:8080";

const tokenMaps = "AIzaSyB9I7snvZRRQ6faupULeBXYz5tU2AUuWek"; // TOKEN PESSOAL
const urlDomain = prod;

export const configCookies = () => {
    const token = Cookies.get("TokenID");

    const authorization = {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json;charset=UTF-8",
            "Access-Control-Allow-Origin": "*",
        },
    };

    return authorization;
};

export default  urlDomain;
