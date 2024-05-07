package AgriMarketBackend.utils;

import java.io.ByteArrayOutputStream;
import java.util.List;
import java.util.zip.Deflater;
import java.util.zip.Inflater;

import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class DiskStorageServiceImpl implements StorageService{
	public static byte[] compressImage(byte[] data) {
		int maxCompressSize = 3670016;
		int compressSize = 0;
		
		Deflater deflater =new Deflater();
		deflater.setInput(data);
		deflater.finish();
		
		ByteArrayOutputStream arrayOutputStream = new ByteArrayOutputStream(data.length);
		byte[] temp = new byte[4*1024];
		
		while(!deflater.finished() && compressSize<maxCompressSize) {
			int size = deflater.deflate(temp);
			arrayOutputStream.write(temp,0,size);
			compressSize += size;
		}
		
		try {
			arrayOutputStream.close();
		} catch (Exception e) {
			// TODO: handle exception
		}
		byte[] compressData = arrayOutputStream.toByteArray();
		
		return compressData;
	}
	
	
	public static byte[] decompressImage(byte[] data) {
		
		
		Inflater inflater =new Inflater();
		inflater.setInput(data);
		
		
		ByteArrayOutputStream arrayOutputStream = new ByteArrayOutputStream(data.length);
		byte[] temp = new byte[4*1024];
		
	
		
		try {
			while(!inflater.finished() ) {
				int count = inflater.inflate(temp);
				arrayOutputStream.write(temp,0,count);				
			}
		} catch (Exception e) {
			// TODO: handle exception
		}
		
		
		return arrayOutputStream.toByteArray();
	}


	@Override
	public List<String> loadAll() {
		// TODO Auto-generated method stub
		return null;
	}


	@Override
	public byte[] store(MultipartFile file) {
		// TODO Auto-generated method stub
		return null;
	}


	@Override
	public Resource load(String fileName) {
		// TODO Auto-generated method stub
		return null;
	}


	@Override
	public void delete(String fileName) {
		// TODO Auto-generated method stub
		
	}
}
