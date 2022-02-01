class ventana:
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

a=ventana(1000,2000,"blanca")
a.mostrar()
a.abrir()
a.mostrar()
a.cerrar()
a.mostrar()
b=ventana(200,200,"negro")
b.mostrar()

