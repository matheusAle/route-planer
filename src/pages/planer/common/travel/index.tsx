import {DatePicker, DateSlice} from 'common/components/date-picker'
import {usePlaner} from '../../hooks/use-planer'
import {useUpdateTravel} from '../../hooks/use-update-travel'

export const Travel = () => {
  const {travel} = usePlaner()
  const updateTravel = useUpdateTravel()

  const onChange = ([startDate, endDate]: DateSlice) => {
    updateTravel({
      ...travel,
      startDate,
      endDate,
    })
  }
  return (
    <div className="flex mb-5 items-center space-y-3 md:space-y-0 space-x-4 flex-col md:flex-row">
      <h1 className="text-3xl">{travel.name}</h1>
      <DatePicker
        value={[travel.startDate || null, travel.endDate || null]}
        onChange={onChange}
      />
    </div>
  )
}
