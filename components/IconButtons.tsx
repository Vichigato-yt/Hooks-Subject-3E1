import { Pressable, Alert } from 'react-native'
import React, { ReactNode } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

interface IconButtonProps {
    Icon: string; //Nombre del Icono
    Presionar?: () => void; //Funcion que se ejecuta al presoinar el boton
    color?:string //Color del icono (opcional)
    tam?:number //Tamaño del icono (opcional)
    bgc?:string //Color de fondo del boton (opcional)
}

const IconButton = ({Icon, Presionar, color, tam, bgc}: IconButtonProps) =>{
    return (
      <Pressable onPress={Presionar} className="p-2 rounded-full">
        <Ionicons 
          name={Icon as any} 
          size={tam} 
          color={color}
          backgroundColor={bgc}
        />
      </Pressable>
    )
  }

export default IconButton