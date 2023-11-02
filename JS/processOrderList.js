function processOrderList(orderList, orderId, state){
	if(state === "Delivered")
	{
		orderList = orderList.filter(a => a.id !== orderId)
	}
	else{
		orderList = orderList.map((a) => {if(a.id == orderId){a.state = "Processing"}
			return a;})
	}
	return a;
}

// {if} curly braces are before the if
function processOrderList(orderList, orderId, state){
	if(state === "Delivered"){
		orderList = orderList.filter(a => a.id !== orderId)
	} else{
		orderList = orderList.map((a) => {if(a.id == orderId){a.state = "Processing"}
			return a;})
	}
	return a;
}
