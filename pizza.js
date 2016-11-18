class pizza{
  //type constructor below
  constructor(s,mt,vt){
  this.size = s; //array ["s","m","l","xL"]
  this.meatToppings = mt;
  this.veggieToppings = vt;
  }
  sizeCost(){
  this.size(S) = 7.99
  this.size(M) = 9.99
  this.size(L) =12.99
  this.size(XL) = 15.99
  }
  toppingCost(top){
    if(top == this.meatToppings){
      return top.length*.99;
    }
    if(top == this.veggieToppings){
      return top.length*.5;
    }
    price(){
      return sizeCost + toppingCost[0] + toppingCost[1];
    }
    addTopping(toptype, newtop){
      if(toptype  == 'meat'){
        this.meatToppings.push(newtop);
      if(topype == 'veggie'){
        this.veggieToppings.push(newtop);
      }
      removeTopping(toptype, newtop){
        if(toptype  == 'meat'){
          this.meatToppings.pop(newtop);
        if(topype == 'veggie'){
          this.veggieToppings.pop(newtop);
        }
    }
  }

    static promotionalDeal(pizza,percent){
      return  pizza.price()*(1-(percent/100));
    }
  }
}
