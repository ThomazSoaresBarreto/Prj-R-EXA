import { Injectable } from '@angular/core'

import { NotificationService } from '../../shared/messages/notification.service'

@Injectable()

export class ExamCartService {
  items: any[]

  constructor(private notificationService: NotificationService){}

  clear(){
    this.items = []
  }

/*  addItem(item:any){
    let foundItem = this.items.find((mItem)=> mItem.menuItem.id === item.id)
    if(foundItem){
      this.increaseQty(foundItem)
    }else{
      this.items.push(new CartItem(item))
    }
    this.notificationService.notify(`Você adicionou o item ${item.name}`)
  }


  removeItem(item:any){
    this.items.splice(this.items.indexOf(item), 1)
    this.notificationService.notify(`Você removeu o item ${item.menuItem.name}`)
  } */

}
