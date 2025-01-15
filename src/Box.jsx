
function Box(){
	let num = Math.random();
	return (
		<>
			<div className="activityBox" style={{backgroundColor: `rgba(0,255,0, ${num})`}}></div>
		</>
	)
}

export default Box
