import { gql, useQuery } from "@apollo/client";

const GET_CHARACTER=gql`
query Getcharacter($id:ID!){
  character(id:$id){
       id
      image
      name
      location{
        name
      }
    episode{
       name
 
     }
  }
 }
    

`
export const useCharacter = (id) => {
    const{error,loading,data}=useQuery(GET_CHARACTER,{
        variables:{
            id
        }
    })
    return{
        error,
        loading,
        data
    }


}
 
export default useCharacter;