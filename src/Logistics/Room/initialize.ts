export function isInitialize(room: Room): boolean {
    if (!room.memory.role) {
        console.log("Initializeing room data")
        return false
    }
    return true
}

export function initialize(room: Room): void {
    let spawns = room.find(FIND_MY_STRUCTURES, { filter: s => s.structureType === STRUCTURE_SPAWN });
    
    if (spawns.length) {
        room.memory.role = 'Colony'
        room.memory.OverSeer.overLord = ['']
        room.memory.OverSeer!.push('BootStrap')
        room.memory.OverSeer.shift()
    } else {
        room.memory.role = 'explored'
    }

    room.memory.lastEntered = Game.time
}