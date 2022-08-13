function jumble(s)
{
    var z="";
    while(s.length > 0)
    {
        var index = Math.floor(Math.random() * s.length);
        var c = s.charAt(index);
        z =z+ s.charAt(index);
        s=s.substring(0, index) + s.substring(index + 1);
    }
    return z;
}
function main(chars,cap,small,numbers)
{
    var x="!@#$%^&*()_+=-[]{}|;':,./<>?`~";
    var y="abcdefghijklmnopqrstuvwxyz";
    var z="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var w="0123456789";

    var s="";
    for(var i=0;i<chars;i++)
    {
        s+=x.charAt(Math.floor(Math.random()*x.length));
    }
    for(var i=0;i<cap;i++)
    {
        s+=y.charAt(Math.floor(Math.random()*y.length));
    }
    for(var i=0;i<small;i++)
    {
        s+=z.charAt(Math.floor(Math.random()*z.length));
    }
    for(var i=0;i<numbers;i++)
    {
        s+=w.charAt(Math.floor(Math.random()*w.length));
    }
    var z=jumble(s);
    return z;
}

module.exports=main;