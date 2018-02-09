function Giohang(oldCart){
    this.items=oldCart.items||{};
    // console.log(`Items lúc này:`,this.items);
    this.add=function(id,item){
        //this.items[id] kiểm tra xem đã có id này chưa. Nếu có thì gán giohang còn k thì giohang=undefined
        //Hiểu đơn giản nó là phép gán. Nếu id này có thì nó sẽ gán vào giỏ hàng.
        // bởi vì object dạng: { 'key':{object}}; => Nếu item[id] mà có thì nó sẽ gán giohang. còn không thì giohang=undefined
        var giohang=this.items[id];// Tạo id cho object
        // console.log(`Giỏ hàng lúc này:`,giohang);
        // Nếu giỏ hàng có rồi thì next() còn không thì gán thêm vào object items
        if(!giohang){
            giohang=this.items[id]={item:item,soluong:0,thanhtien:0}
        }
        //Mỗi lần click add giỏ hàng thì thêm số lượng = 1;
        giohang.soluong++;
    }
    this.convertArray=function(){
        var arr=[];
        for(var id in this.items){
            arr.push(this.items[id]);
            console.log(`giohang convert:`,arr);
        }
        return arr;
    }
    this.update=function(id,sl){
        var cartItem=this.items[id];
        if(sl<=0){
            var soluong=1;
        }else if(sl>=10){
            soluong=10;
        }else{
            soluong=sl;
        }
        cartItem.soluong=soluong;
    }
    this.delete=function(id){
        delete this.items[id];
    }
}
module.exports=Giohang;