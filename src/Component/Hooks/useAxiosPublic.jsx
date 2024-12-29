import axios from "axios"

const useAxiosPublic = () => {
  const axiosInstance = axios.create({
    baseURL: "",
    headers: {
      "Content-Type": "application/json",
    },
  })

  return axiosInstance
}

export default useAxiosPublic
