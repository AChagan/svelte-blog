export default class ClimatiqAPI {
    constructor() { }

    climatiqApiKey = 'F2DKDWWF4443RGQB4G95WTHB2XEM';

     headers = {
		Authorization: 'Bearer ' + <YOUR_KEY>
	};

    async getCloudCpuEmissions(cpuCount: number, duration: number) {
        const cpuEmissions = await fetch('https://beta3.api.climatiq.io/compute/aws/cpu', {
			headers: this.headers,
			method: 'POST',
            body: JSON.stringify({
                cpu_count: cpuCount,
                region: 'eu_west_2',
                cpu_load: 1,
                duration: duration,
                duration_unit: 'h'
            })
        });
        const data = await cpuEmissions.json();
        return { ...data };
    }

    async getCloudRamEmissions(data: number, duration: number) {
        const cpuEmissions = await fetch('https://beta3.api.climatiq.io/compute/aws/memory', {
			headers: this.headers,
			method: 'POST',
            body: JSON.stringify({
                region: "eu_west_2",
                data: data,
                data_unit: "GB",
                duration: duration,
                duration_unit: "h"
            })
        });
        const emissions = await cpuEmissions.json();
        return { ...emissions };
    }

    async getCloudNetworkEmissions(data: number) {
        const cpuEmissions = await fetch('https://beta3.api.climatiq.io/estimate', {
			headers: this.headers,
			method: 'POST',
            body: JSON.stringify({
                emission_factor: "networking-provider_aws-region_eu_west_2",
                parameters: {
                    data: data,
                    data_unit: "GB"
                },
            })
        });
        const emissions = await cpuEmissions.json();
        return { ...emissions };
    }
}
