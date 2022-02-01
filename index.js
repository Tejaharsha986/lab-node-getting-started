class SortedList {
  constructor(items, length) {
    this.items = []
    this.length = 0
  }
  add(item) {
   this.length =this.length+1;
   const items=this.items;
   items.push(item)
   items.sort((a,b)=> a-b)
   this.items =items
  }
  get(pos) {
  
    if(pos >= this.length)
    {
      throw new Error('OutOfBounds');
      return;
    }
    return this.items[pos];
  }
  max() {
    if(this.items.length === 0)
    {
      throw new Error("EmptySortedList");
      return;
    }
    let num = Number.MIN_VALUE;
    this.items.map((item) =>{
      if(item > num){
        num = item;
      }
    });
    return num;
  }
  min() {
    
    if(this.items.length === 0){
      throw new Error("EmptySortedList");
      return;
    }
    let num = Number.MAX_VALUE;
    this.items.map((item)=>{
      if(item < num){
        num = item;
      }
    });
    return num;
  }
  avg() {
    if(this.items.length === 0){
      throw new Error("EmptySortedList");
      return;
    }
    let num = 0;
    this.items.map(item =>{
      num+=item
    })
    return(num/this.length);
  }

  sum() {
    let num = 0;
    this.items.map(item =>{
      num+=item
    })
    return num;
  }
  
}

module.exports = SortedList;
