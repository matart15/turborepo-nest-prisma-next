import styled from '@emotion/styled'
import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Slider } from '@mui/material'
import React, { useState } from 'react'

const NumberWrapper = styled.div`
  display: flex;
`

const NumberButton = styled(Button)<{ isSelected: boolean }>`
  display: flex;
  background-color: ${({ isSelected }) => (isSelected ? 'blue' : 'transparent')};
  color: ${({ isSelected }) => (isSelected ? '#fff' : '#000')};
`

export interface TicketsFilterProps {
  filterTickets: (priceRange: number[], ticketNumbers: number[], sort: string | undefined) => void
}

const TicketsFilter: React.FC<TicketsFilterProps> = ({ filterTickets }) => {
  // TODO 初期値をどうするか
  const [priceRange, setPriceRange] = useState([0, 200])
  const [ticketNumbers, setTicketNumbers] = useState<number[]>([])
  const [sort, setSort] = useState<string | undefined>()

  const handlePriceRange = (newValue: number[] | number) => {
    setPriceRange(newValue as number[])
  }

  const handleNumber = (selectedNumber: number) => {
    if (ticketNumbers.includes(selectedNumber)) {
      const newTicketArray = ticketNumbers.filter(item => {
        return item !== selectedNumber
      })
      setTicketNumbers(newTicketArray)
    } else {
      setTicketNumbers([...ticketNumbers, selectedNumber])
    }
  }

  const handleSort = (selectedSort: string) => {
    setSort(selectedSort)
  }

  const submitFilter = () => {
    filterTickets(priceRange, ticketNumbers, sort)
  }

  return (
    <div>
      <h2>Number of tickets</h2>
      <NumberWrapper>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((number, index) => (
          <NumberButton
            key={index}
            data-cy="number-button"
            isSelected={ticketNumbers.includes(number)}
            onClick={() => handleNumber(number)}
            value={number}>
            {number}
          </NumberButton>
        ))}
      </NumberWrapper>
      <div>Price per ticket</div>
      <Slider
        min={0}
        max={200}
        value={priceRange}
        defaultValue={[0, 200]}
        onChange={(event, value) => handlePriceRange(value)}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        data-cy="ticket-filter"
      />
      <FormControl>
        <FormLabel>Sort by</FormLabel>
        <RadioGroup name="radio-buttons-group">
          <FormControlLabel
            value="lowest"
            onClick={() => handleSort('lowest')}
            control={<Radio />}
            label="Lowest Price"
          />
          <FormControlLabel value="latest" onClick={() => handleSort('latest')} control={<Radio />} label="Latest" />
        </RadioGroup>
        <Button onClick={submitFilter} data-cy="submit-filter-button">
          フィルター適用
        </Button>
      </FormControl>
    </div>
  )
}

export default TicketsFilter
