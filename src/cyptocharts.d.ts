declare module "cryptocharts" {
    interface RoiComparisonOptions {
      chart_id: string;
      cryptocompare_tickers: string[];
      iconomi_tickers: string[];
      last_days: number;
    }
  
    function roiComparison(options: RoiComparisonOptions): Promise<any>;
  
    
  }
  