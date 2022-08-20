import{gql,useQuery} from '@apollo/client'

const GET_LIST=gql`
query{
  characters{
    results{
      image
      name
      id
    }
  }
}

`
const useCharacters = () => {
    const{loading,error,data}=useQuery(GET_LIST)
    return{
        loading,
        error,
        data
    }
}
 
export default useCharacters;