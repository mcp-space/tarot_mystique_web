export default async function handler(req, res) {
  // CORS 헤더 설정
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  try {
    // 타겟 서버 URL - /add 경로 고정
    const targetUrl = `http://182.209.102.132:8080/api/v1/tarot/add`
    
    console.log('🔀 Proxying analytics request to:', targetUrl)
    console.log('📋 Method:', req.method)
    console.log('📋 Body:', req.body)

    const response = await fetch(targetUrl, {
      method: req.method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: req.method !== 'GET' ? JSON.stringify(req.body) : undefined,
    })

    const data = await response.text()
    let jsonData
    
    try {
      jsonData = JSON.parse(data)
    } catch {
      jsonData = { message: data, success: true, status: response.status }
    }

    console.log('✅ Analytics proxy response:', response.status, jsonData)
    
    res.status(response.status).json(jsonData)
  } catch (error) {
    console.error('❌ Analytics proxy error:', error)
    res.status(500).json({
      error: 'Analytics proxy server error',
      message: error.message,
      timestamp: new Date().toISOString()
    })
  }
}
