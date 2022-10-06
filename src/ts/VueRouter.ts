import {useRouter} from 'vue-router'
function main(){
    const router = useRouter()
    function toSection(rout:string){
        rout=rout.toLowerCase()
        router.push(`${rout}`)
    }

    return {toSection}
}

export default main