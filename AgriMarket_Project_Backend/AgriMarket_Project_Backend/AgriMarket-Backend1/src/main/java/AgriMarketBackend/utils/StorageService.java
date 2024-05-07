package AgriMarketBackend.utils;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;


public interface StorageService {
	List<String> loadAll();
	byte[] store(MultipartFile file);
	Resource load(String fileName);
	void delete(String fileName);
}
