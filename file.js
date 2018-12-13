/**
 * helps in adding proper leading zeros to a number
 * @param int maxNum, the higher number
 * @param int minNum, the lower number being subtracted from the higher number
 * @return int the result
 * @author Precious Omonze White fang of WP Lagos :) <me@codeexplorer.ninja>
 */
function skrep(maxNum,minNum){
	maxStr = maxNum.toString();
	ans = maxNum - minNum;
	//convert ans to string too
	ansStr = ans.toString();
	//now split both and compare thier lengths, that way we know how many zeros we hadding
	maxArr = maxStr.split('');
	ansArr = ansStr.split('');
	zeroLen = maxArr.length - ansArr.length;
	var value = "";
	for(var i=0; i<zeroLen; i++){
		value += "0";
	}
	return (value+ans);
}
