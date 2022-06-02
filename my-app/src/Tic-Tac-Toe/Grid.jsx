import { Box, Button, Center, Heading, HStack, SimpleGrid, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Sqaure from './Sqaure'

const grid = [['','',''],['','',''],['','','']]
const Grid = () => {
    const [text,setText] = useState('x')
    const [winner,setWinner] = useState(null)
    const [reset,setReset] = useState(true)
    useEffect(()=> {
        console.log(grid)
        console.log(text)
        setReset(true)
        checkWinner()
    },[text,winner])

    const clr = () => {
        if(reset){
            console.log('reset')
            for(var a=0;a<3;a++){
                for(var b=0;b<3;b++){
                    grid[a][b] = ''
                }
            }
            setText('x')
            setReset(false)
        }
        
    }
    const checkWinner = () => {
        if(grid[0][0] == grid[0][1] && grid[0][0] ==  grid[0][2] && grid[0][0] !==  '')
        {
            let won = grid[0][0]
            setWinner(won)
        }
        if(grid[1][0] == grid[1][1] && grid[1][0] ==  grid[1][2] && grid[1][0] !==  '')
        {
            let won = grid[1][0]
            setWinner(won)
        } 
        if(grid[2][0] == grid[2][1] && grid[2][0] ==  grid[2][2] && grid[2][0] !==  '')
        {
            let won = grid[2][0]
            setWinner(won)
        }
        if(grid[0][0] == grid[1][0] && grid[0][0] ==  grid[2][0] && grid[0][0] !==  '')
        {
            let won = grid[0][0]
            setWinner(won)
        }
        if(grid[0][1] == grid[1][1] && grid[0][1] ==  grid[2][1] && grid[0][1] !==  '')
        {
            let won = grid[0][1]
            setWinner(won)
        }
        if(grid[0][2] == grid[1][2] && grid[0][2] ==  grid[2][2] && grid[0][2] !==  '')
        {
            let won = grid[0][2]
            setWinner(won)
        }  
        if(grid[0][0] == grid[1][1] && grid[0][0] ==  grid[2][2] && grid[0][0] !==  '')
        {
            let won = grid[0][0]
            setWinner(won)
        } 
        if(grid[0][2] == grid[1][1] && grid[0][2] ==  grid[2][0] && grid[0][2] !==  '')
        {
            let won = grid[0][2]
            setWinner(won)
        } 
    }
    const handleClick = (i,j) =>{
        if(grid[i][j] === ''){
            grid[i][j] = text
            if(text === 'x')
            {
                setText('o')
            }else setText('x')
        }
    }
    
  return (
    <Center marginTop='100px'>
        <VStack>
        {!winner ? <Box>
        <VStack>

        {grid.map((row,i)=>(
            <HStack key={i}>
            {row.map((col,j)=>(
                <div key={j} >
                    <Sqaure text={grid[i][j]} onClick={()=>handleClick(i,j)}/>
                </div>
                ))}
            </HStack>
        ))}
        
        </VStack>
        </Box>
        :<Box>
            <Center>
                <Heading>{winner} is the winner!!!</Heading>
            </Center>
        </Box>}
        <Button onClick={() => {setWinner(null);clr()}}>Reset</Button>
        </VStack>
    </Center>
  )
}

export default Grid