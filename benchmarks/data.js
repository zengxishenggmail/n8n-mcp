window.BENCHMARK_DATA = {
  "lastUpdate": 1759117777240,
  "repoUrl": "https://github.com/zengxishenggmail/n8n-mcp",
  "entries": {
    "n8n-mcp Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c5aebc14504ecb60a8f9dbfc36f5e6e33d0b8e95",
          "message": "Merge pull request #212 from czlonkowski/fix/multi-tenant-header-extraction\n\nFix: Multi-tenant support with dynamic tool registration",
          "timestamp": "2025-09-20T08:51:09+02:00",
          "tree_id": "d5e52298a531a73e100b6933ff4944d24245611a",
          "url": "https://github.com/zengxishenggmail/n8n-mcp/commit/c5aebc14504ecb60a8f9dbfc36f5e6e33d0b8e95"
        },
        "date": 1758523917575,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0195,
            "range": "0.37679999999999997",
            "unit": "ms",
            "extra": "51261 ops/sec"
          },
          {
            "name": "sample - array sorting - large",
            "value": 3.228,
            "range": "0.6068000000000002",
            "unit": "ms",
            "extra": "310 ops/sec"
          },
          {
            "name": "sample - string concatenation",
            "value": 0.0047,
            "range": "0.2832",
            "unit": "ms",
            "extra": "213853 ops/sec"
          },
          {
            "name": "sample - object creation",
            "value": 0.0676,
            "range": "0.3535",
            "unit": "ms",
            "extra": "14796 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5825a85ccc504e36e16bad3437546bfdc1dd4fb5",
          "message": "Merge pull request #234 from czlonkowski/feat/telemetry-system-clean\n\nfeat: telemetry system refactor with enhanced privacy and reliability (v2.14.1)",
          "timestamp": "2025-09-26T19:36:19+02:00",
          "tree_id": "c76f224c253ab6de13fcc92d1774bf09518fe522",
          "url": "https://github.com/zengxishenggmail/n8n-mcp/commit/5825a85ccc504e36e16bad3437546bfdc1dd4fb5"
        },
        "date": 1759117776570,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0192,
            "range": "0.2231",
            "unit": "ms",
            "extra": "52166 ops/sec"
          },
          {
            "name": "sample - array sorting - large",
            "value": 3.23,
            "range": "2.8466",
            "unit": "ms",
            "extra": "310 ops/sec"
          },
          {
            "name": "sample - string concatenation",
            "value": 0.0049,
            "range": "0.2789",
            "unit": "ms",
            "extra": "205752 ops/sec"
          },
          {
            "name": "sample - object creation",
            "value": 0.0658,
            "range": "0.30720000000000003",
            "unit": "ms",
            "extra": "15206 ops/sec"
          }
        ]
      }
    ]
  }
}