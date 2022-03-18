import React,{useContext,useState,useEffect} from 'react'
import Grid from '@mui/material/Grid'
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import SelectInput from '../../../coreUI/SelectInput';
import { selectData } from './selectData'
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux'
import { eventSelector } from '../../../redux/event/selector';
import { EventContext } from '../EventViewWrapper';
import {searchEvent} from '../../../redux/event/actions'

type Props = {}

const Filter: React.FC<Props> = () => {
  let dispatch = useDispatch()
  const [search,setSearch] = useState('')
  useEffect(() => {
    dispatch(searchEvent(search))
  },[search])
  const { category,
    address,
    date } = useSelector(eventSelector)
const [handleChangeData,handleFilterData,handleReset] = useContext(EventContext)
  return (
    <Grid container justifyContent={'center'} spacing={4}>
      <Grid item xs={12} display='flex' justifyContent='center'>
        <TextField
          id="input-with-icon-textfield"
          label="Search Event"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
          onChange={(e) => setSearch(e.target.value)}
        />
      </Grid>
      {selectData({
        optionsCategory: category,
        optionsAddress: address,
        optionsData: date,
      }).map((data: {
        options: any,
        name: string,
        title: string
      }, i: number) => (
        <Grid item xs={2} key={i}>
          <SelectInput name={data.name} title={data.title} options={data.options} handleFilter={handleChangeData} />
        </Grid>
      ))}

      <Grid item xs={2} display='flex' textAlign='center' sx={{
            alignSelf: 'center',
            justifyContent: 'flex-end'
      }}>
        <Button variant="contained" onClick={handleFilterData}>Filter</Button>
      </Grid>
      <Grid item xs={2} display='flex' textAlign='center' sx={{
            alignSelf: 'center',
            justifyContent: 'flex-start'
      }}>
        <Button variant="contained" onClick={handleReset}>Reset</Button>
      </Grid>
    </Grid>
  )
}

export default Filter