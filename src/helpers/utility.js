
export function getUrlSlug(url, offset) {
	let stripTrailSlash = stripTrailingSlash(url).split('/');
	stripTrailSlash.shift();
	let loopCount = stripTrailSlash.length - offset;

	return stripTrailSlash.reduce((accumulator, currentValue, index) => {
		if (index < loopCount) {
			return ((index === 1) ? '/' : '') + (accumulator + '/' + currentValue);
		} else {
			return accumulator;
		}
	});
}

export function getFirstUrlSlug(url) {
	let slugIndex = url.lastIndexOf('/');
	if (url.substr(slugIndex) !== '') {
		return url.substring(0, slugIndex);
	}
	return url;
}

export function getLastUrlSlug(url) {
	let slugIndex = url.lastIndexOf('/');
	return url.substr(slugIndex);
}

export function stripTrailingSlash(str) {
	if (str.substr(-1) === '/') {
		return str.substr(0, str.length - 1);
	}
	return str;
}

export function filterSelectOptionLowerCase(input, option) {
	return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
}

export function createPagerPayload(data) {
	return {
		page: data.condition.page + 1,
		pageSize: data.condition.pageSize,
		totalPagees: data.totalPagees,
		totalItemCount: data.totalItemCount,
	}
}

export function convertNestedByArray(sourceObject, namespace) {
	const objectWithNamspace = {};
	const keys = Object.keys(sourceObject);

	for (let i = 0, len = keys.length; i < len; i++) {
		let key = keys[i];
		if (namespace) {
			objectWithNamspace[key] = [namespace, key];
		} else {
			objectWithNamspace[key] = key;
		}
	}

	return objectWithNamspace;
}


export function formatNumber(value) {
	return `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/*
 * 기 저장된 객체를 업데이트(PUT)하기 위해 id 외의 객체의 속성과 값의 집합으로 객체를 나타낸다.
 * 중첩된 객체는 JSON과 유사하지만 따옴표(")는 없는 문자열로 나타낸다.
 *
 * {values:[
 *   {key:"name",value:"홍길동"},
 *   {key:"joinQnA",value:"[{code:0000,value:파랑},{code:0001,value:목요일}]"}
 * ]}
 */
export function keyValueList(obj) {
	const values = [];
	const keys = Object.keys(obj);
	keys.filter(key => key !== 'id').forEach(key => {
		const value = obj[key];
		if (value === null || value === undefined) {
			values.push({key, value:null});
		} else {
			if (typeof value === 'object') {
				//values.push({key, value:JSON.stringify(value).replace(/^"null"$/g,"")});
				values.push({key, value:JSON.stringify(value)});
			} else {
				//values.push({key, value:JSON.stringify(value).replace(/^"(.*)"$/,'$1').replace(/\\/g,'')});
				values.push({key, value});
			}
		}
	});
	return {values};
}

/*
 * 기 저장된 객체를 조회(GET)하기 위해 id 외의 객체의 속성과 값의 집합으로 객체로 변환한 후 JSON 문자열로 나타낸다.
 * 중첩된 객체는 JSON과 유사하지만 따옴표(")는 없는 문자열로 나타낸다.
 *
 * @see keyValueList
 */
export function keyValueListString(obj) {
	const values = keyValueList(obj);
	const json = JSON.stringify(values).replace(/"null"/g,"");
	//console.log(json);
	//return json;
	return encodeURIComponent(json);
}