// Uso de las funciones 

using System;
namespace CSharpHelloWorld
{
    class HelloWorld
    {
        static void Main(string[] args)
        {
            MyFuntion();
            Console.WriteLine(suma(5,5));
        }

        // suma de numeros 
        static void MyFuntion()
        {
            Console.WriteLine("Este es un mesaje de ayuda ");
        }

        static void suma(int a,int b)
        {
            return a+b;
        }
    }

}

