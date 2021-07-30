import axios from "axios";

const baseUrl = process.env.VUE_APP_URL_API;

const rolesService = {};

rolesService.listRoles = async () => {
  return await axios.get(`${baseUrl}/api/roles/listRoles`);
};

rolesService.createRoles = async (name) => {
  return await axios.post(`${baseUrl}/api/roles/rol`, name);
};


rolesService.updateRoles = async (id,name) => {
  return await axios.put(`${baseUrl}/api/roles/updateRol/${id}`, {name:name});
};

rolesService.deleteRoles = async (id) => {
  return await axios.delete(`${baseUrl}/api/roles/deleteRol/${id}`);
};

rolesService.listOne = async (id) => {
    return await axios.get(`${baseUrl}/api/roles/listOneRol/${id}`);
};


export default rolesService;
