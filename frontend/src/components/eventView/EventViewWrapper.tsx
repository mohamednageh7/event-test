import React, { useEffect, useState, createContext, useMemo } from 'react'
import Grid from '@mui/material/Grid'
import Filter from './filters/Filter'
import EventData from './events/EventData'
import { useSelector, useDispatch } from 'react-redux'
import { getEvents, getSelectOptions } from '../../redux/event/actions'
import { eventSelector } from '../../redux/event/selector'


type Props = {}
export const EventContext = createContext<any>([])
const EventViewWrapper = (props: Props) => {

  const [filter, setFilter] = useState({
    category: '',
    address: '',
    isvirtual:''
  })
  const { category, address,isvirtual } = filter
  let dispatch = useDispatch()
  useEffect(() => {
    dispatch(getEvents({category, address,isvirtual }))
    dispatch(getSelectOptions())
  }, [])

  const { event } = useSelector(eventSelector)
  const handleChangeData = (data:object) => {
    console.log({data})
    return setFilter({
      ...filter,
      ...data
    })
  }

  const handleFilterData = async () => {
    return await dispatch(getEvents({ category, address,isvirtual }))
  }

  const handleReset = async () => {
     setFilter({
      category: '',
      address: '',
      isvirtual:''
    })
    return await dispatch(getEvents({category:'', address:'',isvirtual:'' }))
  }
  let value = useMemo(() => [
    handleChangeData,handleFilterData,handleReset,filter]
    , [handleChangeData,handleFilterData,handleReset,filter])
  return (
    <EventContext.Provider value={value}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Filter />
        </Grid>
        <Grid item xs={11}>
          {event?.map((item: any) => (
            <EventData key={item._id} data={item} />
          ))}
        </Grid>
      </Grid>
    </EventContext.Provider>
  )
}

export default EventViewWrapper