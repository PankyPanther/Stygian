import { RoomRole } from "definitions"
import roleHome from "./roleHome"
import roleExplored from "./roleExplored"

interface RoleLookup {
    [roleName: string]: RoomRole 
}

const ROLES: RoleLookup = {
    'explored': roleExplored,
    'home': roleHome,
}

export function getRole(room: Room) {
    const roleName = room.memory.role
    if (!ROLES[roleName]) {
        throw new Error(`There is no role defined for room: ${room}`)
    }

    return ROLES[roleName]
}

export function runRoomRole(room: Room) {
    const role = getRole(room)
    role.run(room)

    // if some time passes update the room in memory
}