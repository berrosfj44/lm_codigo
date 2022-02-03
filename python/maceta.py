class maceta:
    def __init__(self,ancho,alto,color):
        self.ancho=ancho
        self.alto=alto
        self.color=color
        self.estado="cerrada"
    def abrir(self):
        self.estado="abierta"
    def cerrar(self):
        self.estado="cerrada"
    def mostrar(self):
        print("ancho"+str(self.ancho))
        print("alto"+str(self.alto))
        print("estado"+str(self.estado))

    def cambia(self):
        self.color=input("Nuevo color:")
        self.ancho=input(input("Nuevo ancho:"))
        self.alto=input(input("Nuevo alto:"))
        self.estado=input("Nuevo estado abierta,cerrada:")
        if estado=="abierta":
            self.estado="abierta"
        if nestado=="cerrada":
            self.estado="cerrada"

    def __add__(self,vetana):
        an=self.ancho+vetana.ancho
        al=self.alto+vetana.alto
        c=self.color
        return ventana(an,al,c)
    
    def __gt__(self,ventana2):
        if(self.ancho>ventana2.ancho):
            if(self.alto>ventana2.alto):
                return True

        return False

a=ventana(1000,2000,"blanca")
a.mostrar()
a.abrir()
a.mostrar()
a.cerrar()
a.mostrar()
b=ventana(200,200,"negro")
b.mostrar()
c=a+b
if (c>a):
    print("c es mayor que a")
if (b>c):
    print("b es mayor que c")
else:
    print("c es mayor que b")