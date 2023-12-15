import { Args, Int, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { User } from "./models/user.model";
import { mockUsers } from "src/mock/user.mock";
import { UserSettings } from "./models/userSettings.model";
import { mockUserSettings } from "src/mock/userSettings.mock";
   
@Resolver(of => User)
export class UserResolver {

    @Query(returns => User,{nullable : true})
    getUser(@Args("id",{type :  () => Int}) id : number) {
        console.log(id   )
        return  mockUsers[id-1]
    }

    @ResolveField("settings",returns => [UserSettings],{nullable : true,name : "getFullDetailedUser"})
    getUserَAndSettings(@Parent() user: User) {
        console.log( user)
        return  mockUserSettings.find((item) => item.userId == user.id)
    }
}