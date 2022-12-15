import {backendResponseToBackendStats, getTopLanguages} from '../src/get-all';
import {expect, test} from 'vitest';
import {all} from '../remotion/all';

test('Should get top languages right', () => {
	const res = backendResponseToBackendStats(all);
	expect(res.topLanguages?.[0].name).toBe('TypeScript');
	expect(res.topLanguages?.[1].name).toBe('JavaScript');
	expect(res.topLanguages?.[2].name).toBe('CSS');
});

test.only('jakopako test case', () => {
	const res = getTopLanguages([
		{
			repository: {
				name: 'goskyr',
				owner: {
					login: 'jakopako',
				},
				languages: {
					edges: [
						{
							size: 40945,
							node: {
								color: '#00ADD8',
								name: 'Go',
								id: 'MDg6TGFuZ3VhZ2UxOTA=',
							},
						},
					],
				},
			},
		},
		{
			repository: {
				name: 'croncert-config',
				owner: {
					login: 'jakopako',
				},
				languages: {
					edges: [],
				},
			},
		},
		{
			repository: {
				name: 'croncert-web',
				owner: {
					login: 'jakopako',
				},
				languages: {
					edges: [
						{
							size: 17310,
							node: {
								color: '#3178c6',
								name: 'TypeScript',
								id: 'MDg6TGFuZ3VhZ2UyODc=',
							},
						},
						{
							size: 6909,
							node: {
								color: '#563d7c',
								name: 'CSS',
								id: 'MDg6TGFuZ3VhZ2UzMDg=',
							},
						},
						{
							size: 1632,
							node: {
								color: '#e34c26',
								name: 'HTML',
								id: 'MDg6TGFuZ3VhZ2U0MTc=',
							},
						},
					],
				},
			},
		},
		{
			repository: {
				name: 'event-api',
				owner: {
					login: 'jakopako',
				},
				languages: {
					edges: [
						{
							size: 15323,
							node: {
								color: '#00ADD8',
								name: 'Go',
								id: 'MDg6TGFuZ3VhZ2UxOTA=',
							},
						},
						{
							size: 721,
							node: {
								color: '#384d54',
								name: 'Dockerfile',
								id: 'MDg6TGFuZ3VhZ2U1MzU=',
							},
						},
						{
							size: 178,
							node: {
								color: '#89e051',
								name: 'Shell',
								id: 'MDg6TGFuZ3VhZ2UxMzk=',
							},
						},
					],
				},
			},
		},
		{
			repository: {
				name: 'graph-rapid7',
				owner: {
					login: 'JupiterOne',
				},
				languages: {
					edges: [
						{
							size: 51854,
							node: {
								color: '#3178c6',
								name: 'TypeScript',
								id: 'MDg6TGFuZ3VhZ2UyODc=',
							},
						},
						{
							size: 3622,
							node: {
								color: '#89e051',
								name: 'Shell',
								id: 'MDg6TGFuZ3VhZ2UxMzk=',
							},
						},
						{
							size: 1386,
							node: {
								color: '#384d54',
								name: 'Dockerfile',
								id: 'MDg6TGFuZ3VhZ2U1MzU=',
							},
						},
					],
				},
			},
		},
		{
			repository: {
				name: 'graph-nessus',
				owner: {
					login: 'jakopako',
				},
				languages: {
					edges: [
						{
							size: 27261,
							node: {
								color: '#3178c6',
								name: 'TypeScript',
								id: 'MDg6TGFuZ3VhZ2UyODc=',
							},
						},
						{
							size: 328,
							node: {
								color: '#f1e05a',
								name: 'JavaScript',
								id: 'MDg6TGFuZ3VhZ2UxNDA=',
							},
						},
						{
							size: 62,
							node: {
								color: '#89e051',
								name: 'Shell',
								id: 'MDg6TGFuZ3VhZ2UxMzk=',
							},
						},
					],
				},
			},
		},
		{
			repository: {
				name: 'graph-orion',
				owner: {
					login: 'jakopako',
				},
				languages: {
					edges: [
						{
							size: 27504,
							node: {
								color: '#3178c6',
								name: 'TypeScript',
								id: 'MDg6TGFuZ3VhZ2UyODc=',
							},
						},
						{
							size: 328,
							node: {
								color: '#f1e05a',
								name: 'JavaScript',
								id: 'MDg6TGFuZ3VhZ2UxNDA=',
							},
						},
						{
							size: 50,
							node: {
								color: '#89e051',
								name: 'Shell',
								id: 'MDg6TGFuZ3VhZ2UxMzk=',
							},
						},
					],
				},
			},
		},
		{
			repository: {
				name: 'docker-openvpn-client',
				owner: {
					login: 'wfg',
				},
				languages: {
					edges: [
						{
							size: 10955,
							node: {
								color: '#89e051',
								name: 'Shell',
								id: 'MDg6TGFuZ3VhZ2UxMzk=',
							},
						},
						{
							size: 2107,
							node: {
								color: '#f0c040',
								name: 'Smarty',
								id: 'MDg6TGFuZ3VhZ2U0MzE=',
							},
						},
						{
							size: 512,
							node: {
								color: '#3572A5',
								name: 'Python',
								id: 'MDg6TGFuZ3VhZ2UxNDU=',
							},
						},
					],
				},
			},
		},
		{
			repository: {
				name: 'graph-crowdstrike',
				owner: {
					login: 'JupiterOne',
				},
				languages: {
					edges: [
						{
							size: 91676,
							node: {
								color: '#3178c6',
								name: 'TypeScript',
								id: 'MDg6TGFuZ3VhZ2UyODc=',
							},
						},
						{
							size: 328,
							node: {
								color: '#f1e05a',
								name: 'JavaScript',
								id: 'MDg6TGFuZ3VhZ2UxNDA=',
							},
						},
						{
							size: 44,
							node: {
								color: '#89e051',
								name: 'Shell',
								id: 'MDg6TGFuZ3VhZ2UxMzk=',
							},
						},
					],
				},
			},
		},
		{
			repository: {
				name: 'goquery',
				owner: {
					login: 'PuerkitoBio',
				},
				languages: {
					edges: [
						{
							size: 187630,
							node: {
								color: '#00ADD8',
								name: 'Go',
								id: 'MDg6TGFuZ3VhZ2UxOTA=',
							},
						},
						{
							size: 114282,
							node: {
								color: '#ecdebe',
								name: 'Roff',
								id: 'MDg6TGFuZ3VhZ2U1Njg=',
							},
						},
						{
							size: 815,
							node: {
								color: '#89e051',
								name: 'Shell',
								id: 'MDg6TGFuZ3VhZ2UxMzk=',
							},
						},
					],
				},
			},
		},
	]);

	expect(res?.[0].name).toBe('TypeScript');
	expect(res?.[1].name).toBe('Shell');
	expect(res?.[2].name).toBe('Go');
});
