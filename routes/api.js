var express = require('express');
var router = express.Router();


router.get('/session', function(req, res, next) {
  res.send({
    session_id: "1_MX40NTg5NjMwMn5-MTQ5NzkzNTM5MDE5OX5jY0k4cW9ZRjhpRkQ1YzNGK1dXKzBOT0F-fg",
    token: "T1==cGFydG5lcl9pZD00NTg5NjMwMiZzaWc9NjVkZDYyNTA5M2I5NDUyYTRhMGNmYTU3MTZiYjJhMGJiMTFiMTg4ZTpzZXNzaW9uX2lkPTFfTVg0ME5UZzVOak13TW41LU1UUTVOemt6TlRNNU1ERTVPWDVqWTBrNGNXOVpSamhwUmtRMVl6TkdLMWRYS3pCT1QwRi1mZyZjcmVhdGVfdGltZT0xNDk3OTM1NTk1Jm5vbmNlPTAuMTM2NzM0ODI2NDczMDgxNjYmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTUwMDUyNzU5NCZjb25uZWN0aW9uX2RhdGE9JTdCJTIydXNlcklkJTIyJTNBMSU3RA=="
  });
});

router.get('/session/:id', function(req, res, next) {
  res.send({
    session_id: "1_MX40NTg5NjMwMn5-MTQ5NzkzNTM5MDE5OX5jY0k4cW9ZRjhpRkQ1YzNGK1dXKzBOT0F-fg",
    token: "T1==cGFydG5lcl9pZD00NTg5NjMwMiZzaWc9NjVkZDYyNTA5M2I5NDUyYTRhMGNmYTU3MTZiYjJhMGJiMTFiMTg4ZTpzZXNzaW9uX2lkPTFfTVg0ME5UZzVOak13TW41LU1UUTVOemt6TlRNNU1ERTVPWDVqWTBrNGNXOVpSamhwUmtRMVl6TkdLMWRYS3pCT1QwRi1mZyZjcmVhdGVfdGltZT0xNDk3OTM1NTk1Jm5vbmNlPTAuMTM2NzM0ODI2NDczMDgxNjYmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTUwMDUyNzU5NCZjb25uZWN0aW9uX2RhdGE9JTdCJTIydXNlcklkJTIyJTNBMSU3RA=="
  });
});

router.get('*', function(req, res, next) {
    res.status(404)
      .send({
        status: 404
      });
});

module.exports = router;
