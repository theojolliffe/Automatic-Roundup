<script>
	let input = "";

	let output = "";

	function handleClick() {
		console.log("f", input)
		query({"inputs": input}).then((response) => {
			output = response[0]['generated_text']
			console.log(output);
		});

		// query(input)
	};

	// async function query(input) {
	// 	const response = await fetch(
	// 		"https://api-inference.huggingface.co/models/theojolliffe/pegasus-cnn_dailymail-finetuned-roundup",
	// 		{
	// 			headers: { Authorization: "Bearer xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" },
	// 			method: "POST",
	// 			body: JSON.stringify({"inputs": input}),
	// 		}
	// 	);
	// 	const result = await response.json();
	// 	console.log(JSON.stringify(result));
	// 	// return result;
	// }

	async function query(data) {
		const response = await fetch(
			"https://api-inference.huggingface.co/models/theojolliffe/pegasus-cnn_dailymail-finetuned-roundup",
			{
				headers: { Authorization: "Bearer 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" },
				method: "POST",
				body: JSON.stringify(data),
			}
		);
		const result = await response.json();
		return result;
	}




</script>

<textarea bind:value={input} placeholder="Copy and paste text from a statistical bulletin"></textarea>

<br>

<button on:click={handleClick}>
	Summarize
</button>

<p>
	{output}
</p>

<style>
	textarea {
		width: 600px;
		height: 600px;
	}
</style>

<!-- In the week ending 29 August 2021, the seven-day average number of UK daily flights was 3,405, a 5% increase from the previous week (3,256); this is the highest seven-day average number of UK daily flights since Saturday 21 March 2020 and is around half (51%) of the level seen in the equivalent week in 2019 (EUROCONTROL). See the accompanying dataset. In the week to 30 August 2021, the seven-day average estimate of UK seated diners increased by 22 percentage points from the previous week to 156% of the level in the equivalent week of 2019; this is the highest week-on-week increase since the week ending 31 May 2021, which was also a Bank Holiday (OpenTable).  On 27 August 2021, the total volume of online job adverts fell by 3% from the previous week to 125% of its February 2020 average level; this was driven by a week-on-week decline in job adverts in all UK countries and English regions (Adzuna). See the accompanying dataset. In the week to 26 August 2021, the aggregate CHAPS-based indicator of credit and debit card purchases was broadly stable at 1 percentage point below the previous week, and was at 93% of its February 2020 average; all spending categories remained broadly stable during the same period (Bank of England CHAPS data). See the accompanying dataset. In late August 2021, a net 22% of businesses reported a decrease in turnover, compared with normal expectations for this time of year, broadly unchanged from the previous wave (initial results from Wave 38 of the Business Insights and Conditions Survey (BICS)). See Section 3. In the week to 28 August 2021, overall retail footfall in the UK increased by 5%, and was at 84% of the level seen in the equivalent week of 2019 (Springboard). There was an average of 296 daily ship visits in the week to 29 August 2021, broadly similar to the 298 visits in the previous week, while the average number of daily cargo ship visits were also stable at 90 visits (exactEarth). See the accompanying dataset. On Monday 30 August 2021, the volume of all motor vehicle traffic was 84% of the volume seen on the first Monday of February 2020, a decrease of 15 percentage points from the previous week; Monday 30 August 2021 was the Summer Bank Holiday and a decrease in the volume of road traffic on this day is consistent with previous bank holidays (Department for Transport). In the week ending 29 August 2021, the seasonally adjusted average count of traffic camera activity for cars in London increased by 3% from the previous week to 116% of its pre-pandemic level (Transport for London). See the accompanying dataset. There were 13,796 company incorporations in the week to 27 August 2021; this was an increase of 13% from the previous week and is 29% higher than the equivalent week of 2019 (10,701) (Companies House). See the accompanying dataset. There were 5,814 voluntary dissolution applications in the week to 27 August 2021, an increase of 20% from the previous week and 40% higher than the equivalent week of 2019 (4,152); the large difference compared with the equivalent 2019 figure is in part attributed to reduced processing activity as the week in 2019 fell on a bank holiday (Companies House). See the accompanying dataset. -->
