import { Badge, Card } from '@chakra-ui/react'
import React from 'react'

interface Props {
  score: number;
}

export const CriticScore = ({ score }: Props) => {

    const color = score > 75 ? "green" : score > 50 ? "yellow" : "red";
    return (
    <Badge colorScheme={color} fontSize="14px" paddingX={2} borderRadius={5}>
    {score}        
    </Badge>
    )
}




