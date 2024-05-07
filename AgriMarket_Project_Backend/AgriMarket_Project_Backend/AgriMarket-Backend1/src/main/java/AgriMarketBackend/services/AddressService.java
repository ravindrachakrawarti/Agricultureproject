package AgriMarketBackend.services;

import AgriMarketBackend.Entity.Address;

public interface AddressService {
	Address saveAddress(Address address);
	Address findAddress(int id);
}
