import Box from './Box.jsx'
import WeekBox from './WeekBox.jsx'

function MonthBox(){

	return (
		<>
			<div className="monthActivityBox">

				{
					Array.from({ length: 52}, (_, i) => (
						<WeekBox key={i} />
					))
				}
			</div>
		</>
	)
}

export default MonthBox
