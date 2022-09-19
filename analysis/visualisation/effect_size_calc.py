"""
calculate effect size from params
"""
import numpy as np


# motor
param_dict_hc = {
    'A_retention': 2.7,  # retention rate 0.92
    'B_learning': -1.3,  # learning rate 0.33
    'norm_sig': .6 # sd of individual trajectory 1.65
}
# patient parameters (made up based on Takiyama 2016)
param_dict_pt = {
    'A_retention': 1.1,  # retention rate 0.81
    'B_learning': -0.1,  # learning rate 0.47
    'norm_sig': .9 # sd of individual trajectory 1
}
# healthy control sd
sd_dict_hc = {
    'A_retention': 0.8,  # retention rate
    'B_learning': 0.6,  # learning rate
    'norm_sig': 1.8 # sd of individual trajectory 
}
# patient sd
sd_dict_pt = {
    'A_retention': 0.8,  # retention rate
    'B_learning': 0.5,  # learning rate
    'norm_sig': 1.6 # sd of individual trajectory 
}

eff_mt_A = (param_dict_hc['A_retention']-param_dict_pt['A_retention'])/np.mean([sd_dict_hc['A_retention'], sd_dict_pt['A_retention']])
eff_mt_B = (param_dict_hc['B_learning']-param_dict_pt['B_learning'])/np.mean([sd_dict_hc['B_learning'], sd_dict_pt['B_learning']])

print(f'mt A effect={eff_mt_A:.3f}')
print(f'mt B effect={eff_mt_B:.3f}')

# all mean
eff_all = [eff_bandit_p, eff_bandit_xi, eff_gen_beta, eff_gen_sigma, eff_mt_A, eff_mt_B]
print(f'mean of all effects={np.mean(np.abs(eff_all)):.3f}')
print(f'median of all effects={np.median(np.abs(eff_all)):.3f}')
