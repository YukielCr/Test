class Hello
{
    static void Main(string[] args)
    {
        // LLamada a la clase 
        var myClase=new MiClase("Yuki");
        
    }

    class MiClase
    {
        public string myName{get;set;}

        public MiClase(string name)
        {
            myName=name;
        }
    }
}