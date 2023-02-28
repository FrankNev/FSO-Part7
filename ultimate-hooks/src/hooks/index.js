import { useState } from 'react'
import axios from 'axios'

export const useResource = (baseUrl) => {
   const [resources, setResources] = useState([])

   // eslint-disable-next-line react-hooks/exhaustive-deps
   const getAll = async () => {
      const response = await axios.get(baseUrl)
      setResources(response.data)
   }

   const create = async (resource) => {
      const response = await axios.post(baseUrl, resource)
      setResources([...resources, response.data])
   }

   const service = {
      getAll,
      create
   }

   return [
      resources, service
   ]
}