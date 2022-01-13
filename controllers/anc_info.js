const AnchorEarnPackage = require('@anchor-protocol/anchor-earn'); //import Anchor Earn
const AnchorEarn = AnchorEarnPackage.AnchorEarn;
const CHAINS = AnchorEarnPackage.CHAINS;
const DENOMS = AnchorEarnPackage.DENOMS;
const NETWORKS = AnchorEarnPackage.NETWORKS;

//GET '/tea'
const getANC_INFO = async (req, res, next) => {
    const anchorEarn = new AnchorEarn({
        chain: CHAINS.TERRA,
        network: NETWORKS.COLUMBUS_5,
        address: 'terra1vj95w4yec4az2ehhwdeh59w0k34maxqr580lnd'
    });
    
    const userBalance = await anchorEarn.balance({
        currencies: [DENOMS.UST],
    });
    
    var current_Balance = userBalance.balances[0].deposit_balance;
    current_Balance = parseFloat(current_Balance).toFixed(2);

    const marketInfo = await anchorEarn.market({
        currencies: [
          DENOMS.UST
        ],
      });
    var APY_val = marketInfo.markets[0].APY*100;
    APY_val = APY_val.toFixed(2);
    var time = marketInfo.timestamp;

    res.json({Current_Balance: current_Balance, 
            APY : APY_val, 
            Timestamp : time
        });
};

module.exports = {
    getANC_INFO, 
};