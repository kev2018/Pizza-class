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
  this.size(L) =2.99
  this.size(XL) = 15.99
}
toppingCost(top){
  if(top == this.meatToppings){
    return top.length*.99;
  }
  if(top == this.veggieToppings){
    return top.length*.5;
  }
}

  //type class functions below
}
