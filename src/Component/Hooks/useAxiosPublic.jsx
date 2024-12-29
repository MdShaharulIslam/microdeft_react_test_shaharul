import axios from "axios"

const useAxiosPublic = () => {
  const axiosInstance = axios.create({
    baseURL: "https://easysubstech-server.vercel.app",
    headers: {
      "Content-Type": "application/json",
    },
  })

  return axiosInstance
}

export default useAxiosPublic
