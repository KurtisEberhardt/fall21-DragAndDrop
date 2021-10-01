import { AppState } from '../AppState'

class ItemService {
  prepToMove(item, roomId) {
    item.oldRoomId = roomId
    AppState.tempItem = item
    console.log(AppState.tempItem)
  }

  moveItem(newRoomId) {
    const oldRoomIndex = AppState.rooms.findIndex(r => r.id === AppState.tempItem.oldRoomId)
    const newRoom = AppState.rooms.find(r => r.id === newRoomId)

    AppState.rooms[oldRoomIndex].items = AppState.rooms[oldRoomIndex].items.filter(i => i.id !== AppState.tempItem.id)
    newRoom.items.push(AppState.tempItem)
  }
}

export const itemService = new ItemService()
