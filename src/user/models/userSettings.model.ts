import { Field, Int, ObjectType } from "@nestjs/graphql"

@ObjectType()
export class UserSettings {
    @Field((type)=>Int)
    userId : number
    
    @Field((type)=>Int)
    id : number
    
    @Field({defaultValue : false})
    notification : boolean

    @Field({defaultValue : false})
    showStatus : boolean
}