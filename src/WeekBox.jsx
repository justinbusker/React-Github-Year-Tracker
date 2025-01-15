import Box from './Box.jsx'

function WeekBox(){
	
	return (
		<>
			<div className="weekActivityBox">
				
			{
			Array.from({ length: 7 }, (_, i) => (
			<Box key={i}/>
			))
		}
			</div>
		</>
	)
}

export default WeekBox
