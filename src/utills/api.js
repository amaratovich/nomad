import Fetch from "../fetch";

export const getCitiesRequest = async () => await Fetch('cities/', {method: 'GET'})
export const getDistrictsRequest = async (id) => await Fetch(`districts/?city_id=${id}`, {method: 'GET'})
