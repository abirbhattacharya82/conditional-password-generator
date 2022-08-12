function main(n)
{
    var w="+/()*&^%$#@!~`?><|}{][";
    var x="ABCDEFGHIJKLMNOPQRTSUVWXYZ";
    var y="abcdefghijklmnopqrtsuvwxyz";
    var z="0123456789";    
    if(n<4)
    {
        return "uD0n'tD3s3rV3P@ssuu0rD";
    }
    else
    {
        var s="";
        var i=0;
        while(i<n)
        {
            if(i%4==0)
            {
                s+=w.charAt(Math.floor(Math.random()*w.length));
            }
            else if(i%3==0)
            {
                s+=x.charAt(Math.floor(Math.random()*x.length));
            }
            else if(i%2==0)
            {
                s+=y.charAt(Math.floor(Math.random()*y.length));
            }
            else
            {
                s+=z.charAt(Math.floor(Math.random()*z.length));
            }
        }
        return s;
    }
}

module.exports = main;